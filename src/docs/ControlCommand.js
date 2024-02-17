import React, { useState } from "react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import "../docs/RigInstall.css";
import remarkGfm from "remark-gfm";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ControlCommand() {
  const data = `
  # Liquid Galaxy Control Commands
  
  Liquid Galaxy control commands are used to manage and control various aspects of the Liquid Galaxy system, such as setting refresh intervals, restarting, shutting down, etc.
  
  ## Set Refresh
  
  This command sets the refresh interval for the Liquid Galaxy screens.
  
   ~~~bash
   suspend fun setRefresh() {
       for (i in 2..screens) {
           val search = "<href>##LG_PHPIFACE##kml/slave_$i.kml</href>"
           val replace =
               "<href>##LG_PHPIFACE##kml/slave_$i.kml</href><refreshMode>onInterval</refreshMode><refreshInterval>2</refreshInterval>"
           execute("""sshpass -p $password ssh -t lg$i 'echo $password | sudo -S sed -i "s|$replace|$search|" ~/earth/kml/slave/myplaces.kml'""")
           execute("""sshpass -p $password ssh -t lg$i 'echo $password | sudo -S sed -i "s|$search|$replace|" ~/earth/kml/slave/myplaces.kml'""")
       }
   }
   ~~~
  
   ## Reset Refresh
  
  This command resets the refresh settings to default for the Liquid Galaxy screens.
    
   ## Relaunch
  
  This command relaunches the Liquid Galaxy system.
  
   ~~~bash
   suspend fun relaunch() {
       for (i in 1..screens) {
           val command = """/home/$username/bin/lg-relaunch  /home/$username/log.txt;
               RELAUNCH_CMD="if [ -f /etc/init/lxdm.conf ]; then
                   export SERVICE=lxdm
               elif [ -f /etc/init/lightdm.conf ]; then
                   export SERVICE=lightdm
               else
                   exit 1
               fi
               if  [[ \${'$'}(service \${'$'}SERVICE status) =~ 'stop' ]]; then
                   echo $password | sudo -S service \${'$'}SERVICE start
               else
                   echo $password | sudo -S service \${'$'}SERVICE restart
               fi
               " && sshpass -p $password ssh -x -t lg@lg$i "${"$"}RELAUNCH_CMD"""".trimMargin()
   
           execute(command)
       }
   }
   ~~~
  
   ## Restart
  
  This command restarts the Liquid Galaxy system.
  
   ~~~bash
   suspend fun restart() {
       for (i in 1..screens) {
           execute("""sshpass -p $password ssh -t lg$i "echo $password | sudo -S reboot"""")
       }
   }
   ~~~
  
   ## Shutdown
  
  This command shuts down the Liquid Galaxy system.
  
   ~~~bash
   suspend fun shutdown() {
       for (i in 1..screens) {
           execute("""sshpass -p $password ssh -t lg$i "echo $password | sudo -S poweroff"""")
       }
   }
   ~~~
  
  
  **Note:** These commands are implemented using the JSch library. It is assumed that there is a successful SSH connection established with the Liquid Galaxy rig prior to executing these commands.
  
`;
  return (
    <div className=" rig ">
      <Markdown
        children={data}
        remarkPlugins={[remarkGfm]}
        className="markdown-output"
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
        }}
      />
    </div>
  );
}
