import '../styles/globals.scss'
import DefaultLayout from '../default-layout';
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient({

    defaultOptions: {
 
      queries: {
 
        retry:false
 
      },
 
    },
 
  })
function MyApp({ Component, pageProps }) {
    const layout=React.useMemo(()=>({component:DefaultLayout || Component?.layout }),[Component])

    return <QueryClientProvider client={queryClient}> <layout.component> 
        <Component {...pageProps} />
    </layout.component>
    </QueryClientProvider>
}

export default MyApp
