const img = document.querySelector("img")
const input = document.querySelector("input")
const favicon = document.querySelector("link[rel*='icon']");

input.addEventListener("change", () => {
    try {
        const Image = URL.createObjectURL(input.files[0])
        img.src = favicon.href = Image
    }
    catch (error){
        alert("please Select An Image")
    }
})