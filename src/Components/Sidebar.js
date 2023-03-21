import { ReactComponent as Logo } from "../assets/logo.svg"
import { ReactComponent as EntityLogo } from "../assets/entity_logo.svg"
import { ReactComponent as RightChevron } from "../assets/right_chevron.svg"
import { sidebar_routes } from "../constants/sidebar_routes"

const Sidebar = () => {
    return (
        <div class="bg-midnight-300 h-screen basis-1/5 flex flex-col gap-10 px-6 py-10">
            <Logo />
            <div class="bg-midnight-200 flex justify-between items-center px-4 py-4 rounded-lg">
                <EntityLogo class="" />
                <div class="flex flex-col text-white">
                    <span>Entity Name</span>
                    <span class="text-sm">www.website.com</span>
                </div>
                <RightChevron class="bg-midnight-100 rounded-full " />
            </div>
            <div class="flex flex-col gap-8 px-4">
                {
                    sidebar_routes.map(sidebar_route => (
                        <div key={sidebar_route.id} class="flex gap-2">
                            <sidebar_route.icon />
                            <span class="text-white font-light">{sidebar_route.title}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Sidebar