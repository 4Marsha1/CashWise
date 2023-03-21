import { ReactComponent as LeftChevron } from "../assets/left_chevron.svg"
import { ReactComponent as InfoIcon } from "../assets/info_icon.svg"
import { ReactComponent as TrashIcon } from "../assets/trash.svg"
import { ReactComponent as EditIcon } from "../assets/edit.svg"

import { Tooltip } from "@mui/material"

const INVITE_MESSAGE = "Invited co-workers would have all the permissions except the option to delete the company"

const Dashboard = ({ users, handleChange, addUser }) => {
    return (
        <div class="basis-4/5 px-8 py-10 flex flex-col gap-10">
            <div class="flex gap-4 items-center">
                <LeftChevron />
                <span class="text-xl">Co-Workers</span>
            </div>

            <div class="flex flex-col gap-6 px-8 py-8 shadow-md">
                <div class="flex justify-between">
                    <span>Invite your co-workers to collaborate on Cashwise.</span>
                    <Tooltip title={INVITE_MESSAGE} arrow placement="bottom-start">
                        <InfoIcon class="cursor-pointer" />
                    </Tooltip>
                </div>
                {
                    users.map(user => (
                        <div class="flex gap-6">
                            <input name="email" type="email" placeholder="Email" class="bg-grey px-6 py-4 rounded-md w-96" onChange={handleChange} />
                            <select name="role" defaultValue="select" class="bg-grey px-6 py-4 rounded-md" onChange={handleChange}  >
                                <option value="select" disabled>Select</option>
                                <option value="Admin">Admin</option>
                                <option value="Moderator">Moderator</option>
                                <option value="Member">Member</option>
                            </select>
                        </div>
                    ))
                }
                <div class="flex justify-between">
                    <button class="text-sm text-blue" onClick={() => addUser()}>+Add More</button>
                    <button class="bg-blue text-white px-4 py-2 rounded-md">Send Invite</button>
                </div>
            </div>

            <div class="flex flex-col gap-6 px-8 py-8 shadow-md">
                <div class="flex items-center justify-between w-3/5 text-lg">
                    <span>Co-Workers Emails</span>
                    <span>Roles</span>
                    <span></span>
                    <span></span>
                </div>
                {
                    users.map(user => (
                        <div class="flex items-center justify-between w-3/5">
                            {user.role === "owner" ?
                                <span class="text-gray">{user.email}</span> :
                                <span>{user.email}</span>}
                            {user.role === "owner" ?
                                <span class="text-gray">{user.role}</span> :
                                <span class="bg-grey px-6 py-4 rounded-md">{user.role}</span>
                            }
                            {user.role !== 'owner' ?
                                <Tooltip title="Delete" arrow placement="bottom-start">
                                    <TrashIcon />
                                </Tooltip>
                                : <div></div>
                            }
                            {user.role !== 'owner' ?
                                <Tooltip title="Resend Invite" arrow placement="bottom-start">
                                    <EditIcon />
                                </Tooltip>
                                : <div></div>
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Dashboard