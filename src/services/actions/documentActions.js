export const upToTop = () => {
    document.documentElement.style.scrollBehavior = "smooth"
    document.documentElement.scrollTop = 0
}