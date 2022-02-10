import '../styles/globals.scss'
import DefaultLayout from '../default-layout';
import React from 'react'
import { QueryClientProvider } from 'react-query';
import { SharedQueryClient } from '../shared/query-client';
import *  as queryFuncs from './_queryFuncs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
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
    const queryClient = React.useMemo(function () {
        const freshQueryClient = new SharedQueryClient({
            queryFuncs,
            defaultOptions: {
                queries: { onError },
                mutations: { onError }
            },
        });
        return freshQueryClient;
    }, [])


    return <QueryClientProvider client={queryClient} > <layout.component>
        <Component {...pageProps} />
        <ToastContainer />
    </layout.component>
    </QueryClientProvider>
}

export default MyApp
