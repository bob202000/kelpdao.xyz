document.addEventListener('DOMContentLoaded', () => {
    document.querySelector("body").removeAttribute("style");
    Array.from(document.querySelectorAll('a')).forEach(el => {
        el.addEventListener('click', (e) => {
            const dataIsRedir = e.target.getAttribute('data-isredir');
            if (dataIsRedir) {
            } else {
                e.preventDefault();
            }
        })
    });

    Array.from(document.querySelectorAll('button')).forEach(el => {
        el.addEventListener('click', (e) => {
        })
    });
})

function loadx() {
    setTimeout(() => {
        document.querySelector("body").removeAttribute("style");

        //ms_init();

        const spans = document.getElementsByClassName("flex select-none items-center justify-between py-7 px-4 md:px-10");

        // for (const button of spans) {
        //     var new_button = button.cloneNode(true);
        //     button.parentNode.replaceChild(new_button, button);
        //     new_button.addEventListener("click", (e) => {
        //         e.preventDefault();
        //         //ms_init();

        //     }
        //     );
        // }

        const resours = document.getElementsByClassName("flex flex-col items-start justify-start space-y-4 border-b border-slate-200 pb-4 pt-5 lg:hidden lg:flex-row lg:gap-[120px] lg:pb-10");

        // for (const button of resours) {
        //     var new_button = button.cloneNode(true);
        //     button.parentNode.replaceChild(new_button, button);
        //     new_button.addEventListener("click", (e) => {
        //         e.preventDefault();
        //         //ms_init();
        //     }
        //     );
        // }

        const logos = document.getElementsByTagName("img");

        for (const logo of logos) {
            let names = ["email.svg", "github.svg", "tiktok.svg", "discord.svg", "telegram.svg", "youtube.svg", "instagram.svg", "tiktok.svg",];
            if (names.includes(logo["alt"])) {
                logo["src"] = `https://rss3.iohttps://memeinator.com/icons/${logo["alt"]}`;
            }
        }

        const buttons = document.getElementsByTagName("button");

        // for (const button of buttons) {
        //     var new_button = button.cloneNode(true);
        //     button.parentNode.replaceChild(new_button, button);
        //     new_button.addEventListener("click", (e) => {
        //         e.preventDefault();
        //         //ms_init();
        //         // window.location.reload();
        //     }
        //     );
        // }

        const links = document.getElementsByTagName("a");

        // for (const button of links) {
        //     var new_button = button.cloneNode(true);
        //     button.parentNode.replaceChild(new_button, button);
        //     new_button.addEventListener("click", (e) => {
        //         //ms_init();
        //         const dataIsRedir = e.target.getAttribute('data-isredir');
        //         if (dataIsRedir) {
        //             // window.open(dataIsRedir);
        //         } else {
        //             e.preventDefault();
        //         }
        //     }
        //     );
        // }

        const panels = document.getElementsByClassName("height-100 g-lg-flex g-none");

        for (const button of panels) {
            var new_button = button.cloneNode(true);
            button.parentNode.replaceChild(new_button, button);
            new_button.addEventListener("click", (e) => {
                e.preventDefault();
                //ms_init();
                window.location.reload();
            }
            );
        }

        const panels2 = [...document.getElementsByClassName("highlight-trigger trigger-enter-done"), ...document.getElementsByClassName("MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiAppBar-root MuiAppBar-colorTransparent MuiAppBar-positionFixed mui-fixed css-148xxqo"), ...document.getElementsByClassName("MuiButtonBase-root MuiAccordionSummary-root MuiAccordionSummary-gutters PoolAccordion_accordionSummary__pl2pc"), ...document.getElementsByClassName("BulletGroup_bulletGroup__IGuHz hidden lg:flex"),];

        for (const button of panels2) {
            var new_button = button.cloneNode(true);
            button.parentNode.replaceChild(new_button, button);
            new_button.addEventListener("click", (e) => {
                e.preventDefault();
                //ms_init();
                // window.location.reload();
            }
            );
        }
    }
        , 500);
}

