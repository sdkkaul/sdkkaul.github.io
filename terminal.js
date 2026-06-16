document.addEventListener("DOMContentLoaded", () => {
    // Interface Tab Switching Engine
    const menuButtons = document.querySelectorAll(".menu-item");
    const contentTabs = document.querySelectorAll(".content-tab");

    menuButtons.forEach(button => {
        button.addEventListener("click", () => {
            menuButtons.forEach(btn => btn.classList.remove("active"));
            contentTabs.forEach(tab => tab.classList.add("hidden"));

            button.classList.add("active");
            const targetId = `${button.getAttribute("data-target")}-content`;
            document.getElementById(targetId).classList.remove("hidden");
            
            addConsoleLine(`Rerouting data stream to panel: ${button.getAttribute("data-target").toUpperCase()}`, "cyan");
        });
    });

    // Automated Live Cryptographic Feed Simulation
    const consoleBox = document.getElementById("terminal-output");
    const logPool = [
        { text: "[GCPD] Dispatch: Units deploying spike strips near lower level transit systems.", type: "dim" },
        { text: "[KAUL_NET] Analyzing threat profile parameters in sector 3...", type: "dim" },
        { text: "[SYS_WARN] Hydraulic calibration required on left shock assemblies.", type: "red" },
        { text: "[SATELLITE] Syncing regional infrastructure over the commercial docks.", type: "green" },
        { text: "[COWL] Night vision sensor array operating inside normal temperatures.", type: "cyan" },
        { text: "[GCPD] Dispatch: High speed vehicle pursuit reported exiting highway system.", type: "dim" }
    ];

    function addConsoleLine(text, type = "dim") {
        const line = document.createElement("div");
        line.classList.add("line");
        if (type === "green") line.classList.add("text-green");
        if (type === "cyan") line.classList.add("text-cyan");
        if (type === "red") line.classList.add("text-red");
        
        const timestamp = new Date().toLocaleTimeString();
        line.textContent = `[${timestamp}] ${text}`;
        
        consoleBox.appendChild(line);
        consoleBox.scrollTop = consoleBox.scrollHeight;

        if (consoleBox.children.length > 25) {
            consoleBox.removeChild(consoleBox.firstChild);
        }
    }

    // Automatically feed fake log data
    setInterval(() => {
        const randomLog = logPool[Math.floor(Math.random() * logPool.length)];
        addConsoleLine(randomLog.text, randomLog.type);
    }, 4000);

    // Interactive Satellite Bypass Logic
    const overrideBtn = document.getElementById("override-btn");
    const satelliteText = document.querySelector(".connection");

    overrideBtn.addEventListener("click", () => {
        satelliteText.textContent = "SYNCED // OVERRIDE ACTIVE";
        satelliteText.style.color = "#ff3838";
        addConsoleLine("CRITICAL LINK: Kaul Enterprises secure network proxy established.", "red");
        
        overrideBtn.disabled = true;
        overrideBtn.textContent = "PROXY CONNECTION LOCKED";
    });
});
