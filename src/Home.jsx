import Header from "./components/Header";
import LangList from "./components/LangList";






function Home(){
    return(
        <>
            <Header/>
            <h1 style={{
                textAlign:"center",
                color:"#d1e8d6",
                marginTop:100   
            }}>Best Programming Language</h1>
            <LangList/>
        </>
    )
}
export default Home