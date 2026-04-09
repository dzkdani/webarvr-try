AFRAME.registerComponent("gesture-rotate", {

    init: function () {

        const el = this.el
        let isDragging = false
        let previousX

        window.addEventListener("pointerdown", e => {
            isDragging = true
            previousX = e.clientX
        })

        window.addEventListener("pointerup", () => {
            isDragging = false
        })

        window.addEventListener("pointermove", e => {

            if (!isDragging) return

            const delta = e.clientX - previousX
            previousX = e.clientX

            const rot = el.getAttribute("rotation")
            rot.y += delta * 0.5

            el.setAttribute("rotation", rot)

        })
    }
})