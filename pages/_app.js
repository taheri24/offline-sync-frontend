import '../styles/globals.scss'
import DefaultLayout from '../default-layout';
import React from 'react'
import { QueryClientProvider } from 'react-query';
import { SharedQueryClient } from '../shared/query-client';
import *  as apiFuncs from '../lib/api-funcs';

import { ToastContainer, toast } from 'react-toastify';


function App({ Component, pageProps }) {
    const layout = React.useMemo(() => ({ component: DefaultLayout || Component?.layout }), [Component])
    const onError = React.useCallback(
        function (/** @type {import('axios').AxiosError}*/ err) {
            if (err.isAxiosError) {
                const { response } = err;
                const { message } = response.data || {};
                if (message)
                    toast(message, { type: 'error' });
            }
        }, []);
    const onSuccess=React.useCallback(function(serverResponse) {
        const { message } = serverResponse || {};
        if ( message) {
            toast(message, { type: 'info' });
        }
    }  ,[]);  
    const queryClient = React.useMemo(function () {
        const freshQueryClient = new SharedQueryClient({
            apiFuncs,
            defaultOptions: {
                queries: { onError },
                mutations: { onError,onSuccess }
            },
        });
        return freshQueryClient;
    }, [onError,onSuccess]);


    return <QueryClientProvider client={queryClient} > <layout.component>
        <Component {...pageProps} />
        <ToastContainer />
    </layout.component>
    </QueryClientProvider>
}

export default App
