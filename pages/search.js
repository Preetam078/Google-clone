
import Head from 'next/head'
import { useRouter } from 'next/router';
import Header from '../components/Header'
import { API_KEY, CONTEXT_KEY } from '../keys';
import Response from '../Response';
import SearchResults from '../components/SearchResults';

export default function Search({results}) {
    console.log(results);

    const router = useRouter();
    return (
        <div>
            <Head>
                <title>{router.query.term}-Google Search</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
 
            <Header/>
            {/**Search Result */}
             <SearchResults results={results}/>
        </div>
    )
}

export async function getServerSideProps(context) {
    const startIndex = context.query.start || "0";
    
    const data = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`).then((response) => response.json())


    //after the server side rendered... pass the result tothe client

    return {
        props: {
            results:data,
        }
    }
}
