import { About } from "../components/About"
import { YoutubeVideo } from "../components/YoutubeVideo"
import { SocialLinks } from "../components/SocialLinks"

export const Home = () => {
    return (
         <main>
            <About/>
            <YoutubeVideo id="3w5vsOkd7vg"/>
            <YoutubeVideo id="zXn4cVgX5wQ"/>
            <SocialLinks/>
        </main>
    )
}