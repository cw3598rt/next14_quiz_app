import HomePresenter from './home.presenter';
import { getThemes } from './home.quiery';

export default async function HomeContainer (){
    let themeList;

try{
    themeList = await getThemes();
    if(themeList.length ===0){
        return <div>
            no data.
        </div>
    }

}catch(e){
    throw new Error("connection is not available");
}

    return(
        <HomePresenter themeList={themeList}/>
    )
}