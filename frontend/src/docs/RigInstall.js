import React, { useState } from "react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import "../docs/RigInstall.css";
import remarkGfm from "remark-gfm";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function RigInstall() {
  const data = `# Installation Guide for Liquid Galaxy Software
  

  This manual is a guide on how to install Liquid Galaxy software. We recommend installing it on brand new machines. We also provide instructions on how to install an Ubuntu system.
  
  ## Ubuntu Installation
  
  The recommended Ubuntu version for this installation is 16.04. You can download it from [here](link). Follow the steps below to install Ubuntu:
  
  1.   Create a bootable USB with Rufus. Ensure the USB has a minimum capacity of 4GB. Refer to [this video](link) for instructions.
  
  2.   Connect the USB to the PC and turn it on. Select the boot device (e.g., F8) or adjust boot priorities in BIOS.
  
  3.  Select "Install Ubuntu" and choose English (English US) as the language.
  
  4.  Skip downloading updates and installing additional software. Select "Erase disk and install Ubuntu" in the installation type window.
  
  5.  Select time zone and keyboard layout.
  
  6.  For user creation, set the name and username as "lg" and the computer’s name as "lgX" (X represents the machine number).
  
  7.  Use the password "lqgalaxy" for all PCs.
  
  8.  Wait for the installation to complete and restart the system.
  
 \`Important: Avoid upgrading the system to newer versions.\`

  ### **Liquid Galaxy Installation**
  
  Ensure all PCs are on the same network before starting the Liquid Galaxy installation. Follow these steps:
   
  1.Open a terminal (Ctrl+T) and run the following commands:
  
  ~~~bash  sudo apt upgrade -f
  sudo apt update
  sudo apt install curl
  sudo apt install lsb lsb-core
  ~~~
   
   2. **Master Installation**:
      -   Run:
          ~~~bash
          bash <(curl -s https://raw.githubusercontent.com/LiquidGalaxyLAB/liquid-galaxy/master/install.sh)
          ~~~
      -   During installation, provide the following parameters:
          -   Machine id: Number identifying the machine.
          -   Total machines count: Number of machines.
          -   Unique number (octet): Unique installation identifier.
          -   Extra drivers: n
          -   Confirm settings.
   
   3. **Slaves Installation**:
       Run the installation script.
      -   Provide machine id, master machine ip, master local user password, total machines count, and unique number.
      -   Confirm settings.
   
  4.  After installation, reboot the machines.
   
  **Drivers.ini Configuration**
   
  Edit the drivers.ini file to ensure screen synchronization. Follow the instructions below:
   
  -    **Master Configuration**:
            
       ~~~bash
        ViewSync/send = true;
        ViewSync/receive = false;
        ViewSync/hostname = BROADCAST_ADDRESS
        ~~~
   
  -   **Slaves Configuration**:
  
      ~~~bash
      ViewSync/send = false;
      ViewSync/receive = true;
      ViewSync/hostname = BROADCAST_ADDRESS
      ~~~
   
   **Note**: Adjust the yawOffset for slaves accordingly.
   
   **Additional Configurations**
   -   Full Screen Mode: Run\` /'~/tools/earth-fullscreen.sh && sudo reboot/'\` for complete full screen. Use ['F11'] to toggle menu bar.
   -   Screen Rotation: Use the provided commands to rotate or disable screen rotation.
   -   Google Earth 7.1 Bug: Install required libraries or switch to Google Earth Pro 7.1 if needed.
   
  **List of Commands**
  
  -   \`lg-poweroff\`: Turns off all connected PCs.
  -   \`lg-reboot\`: Reboots all connected PCs.
  -   \`lg-relaunch\`: Restarts all connected PCs.
  -   \`ifconfig\`: Displays network configuration.
   
`;
  return (
    <div className=" rig ">
      <div>
      <Markdown
        children={data}
        remarkPlugins={[remarkGfm]}
        className="markdown-output-rig "
        components={{
          code(props) {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter
                {...rest}
                PreTag="div"
                children={String(children).replace(/\n$/, "")}
                language={match[1]}
                style={vscDarkPlus}
                wrapLines={true}
              />
            ) : (
              <code {...rest} className="code">
                {children}
              </code>
            );
          },
          blockquote(props) {
            return <blockquote {...props} className="blockquote" />
          },
          
          ul({ node, ...props }) {
            return <ul {...props} />;
          },
          img: ({ node, ...props }) => {
            
            return <img {...props} />;
          },
          li({ node, ...props }) {
            return <li {...props} />;
          },
        }}
      />
      </div>
    </div>
  );
}
