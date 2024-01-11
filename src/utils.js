const smoothScroll = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
        })
    }
}

export { smoothScroll }
