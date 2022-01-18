import { loaderSubject } from "./rxJs"
export const startLoader = () => {
    loaderSubject.next(true);
}
export const stopLoader = () => {
    loaderSubject.next(false);
}
