import { getProfile } from "@/sanity/sanity-utils"

export default async function Profile() {

    const profile = await getProfile();

    return <div>{profile.fullName}</div>
}