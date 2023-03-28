import { About } from "../components/About"
import { YoutubeVideo } from "../components/YoutubeVideo"
import { SocialLinks } from "../components/SocialLinks"

export const Home = () => {
    return (
         <main>
            <About/>
            <YoutubeVideo id="I-HMtBLc7cQ"/>
            <YoutubeVideo id="zXn4cVgX5wQ"/>
            <SocialLinks/>
        </main>
    )
}