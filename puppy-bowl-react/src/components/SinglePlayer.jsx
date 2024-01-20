import { useParams } from "react-router-dom";
import { Popover } from "@headlessui/react";

const SinglePlayer = () => {
    return (
        <>
            <div>Single Player</div>
            <Popover className="relative border-2 border-amber-950">
                {/*seems like I'm gonna have to put the photos here*/}
                <img src="/vite.svg" alt="" />
                <Popover.Button>Solutions</Popover.Button>

                {/*this is what pops open after the "Solutions" is clicked*/}
                <Popover.Panel className="absolute z-10">
                    <div className="grid grid-cols-2">
                        <a href="/analytics">Analytics</a>
                        <a href="/engagement">Engagement</a>
                        <a href="/security">Security</a>
                        <a href="/integrations">Integrations</a>
                    </div>

                </Popover.Panel>
            </Popover>
        </>
    )
}

export default SinglePlayer;