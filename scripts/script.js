const MouseGlow = document.getElementById("MouseGlow");

window.addEventListener("mousemove", (event) => {
    MouseGlow.animate({left: `${event.clientX}px`, top: `${event.clientY}px`}, {duration: 3500, fill: "forwards"});
});

const RightPanel = document.getElementById("rightPanel")
const NavItems = document.querySelectorAll(".NavItem");
const Sections = document.querySelectorAll(".Section");

function SetActiveSection()
{
    let Index = Sections.length;
    while(--Index && RightPanel.scrollTop + 150 < Sections[Index].offsetTop) {}
    NavItems.forEach((item) => item.classList.remove('Active'));
    NavItems[Index].classList.add('Active');
}

function ScrollToSection(event)
{
    const SectionId = event.currentTarget.getAttribute('DataSection');
    const TargetSection = document.getElementById(SectionId);
    RightPanel.scrollTo({top: TargetSection.offsetTop - window.innerHeight * 0.1, behavior: "smooth"});
}

NavItems.forEach(item => item.addEventListener("click", ScrollToSection));
RightPanel.addEventListener("scroll", SetActiveSection);
SetActiveSection();

let State = true;
const MainButton = document.getElementById("MainButton");
const MainDiv = document.getElementById("MainDiv");
const Background = document.getElementById("background");
MainButton.onclick = function() {ChangeState();};

function ChangeState()
{
    console.log(State);
    let Rotation = parseInt((MainButton.style.transform || "0").match(/\d+/)) + 180;
    MainButton.style.transform = `rotateZ(${Rotation}deg)`;

    if (State) {
        MainDiv.classList.add("hidden");
        Background.classList.add("visible")
    } else
    {
        MainDiv.classList.remove("hidden");
        Background.classList.remove("visible");
    }
    State = !State
    }

