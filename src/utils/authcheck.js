import { decryptData } from "./crypto"
import router from "@/router"

export const roleType = [
    'student',
    'manager',
    'executor',
    'worker',
]

export function authInclude(roleList) {
    const data = decryptData()
    if (data.role === '' || data.role === undefined || data.role === null) {
        router.push("/home")
        return false
    }

    if (roleList.includes(roleType[data.role])) {
        return true
    }

    return false

}

export function authExclude(roleList) {
    const data = decryptData()
    if (data.role === '' || data.role === undefined || data.role === null) {
        console.error(data.role);
        router.push("/home")
        return false
    }

    if (roleList.includes(roleType[data.role])) {
        return false
    }

    return true
}