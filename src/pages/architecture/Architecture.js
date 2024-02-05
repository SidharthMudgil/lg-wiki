import React from "react";
import master from "../../assets/master-slave.svg";
export default function Architecture() {
  return (
    <div className="background p-14">
      <div className="flex flex-wrap text-left text-lg">
        <h1 className="text-3xl flex mx-auto p-10"> Overview :</h1>
        <p>
          Liquid Galaxy is a remarkable panoramic system that is tremendously
          compelling. It started off as a Google 20% project created by Google
          engineer Jason Holt to run Google Earth across a cluster of PC's and
          it has grown from there! Liquid Galaxy hardware consists of 3 or more
          computers driving multiple displays, usually one computer for each
          display. Liquid Galaxy applications have been developed using a
          master/slave architecture. The view orientation of each slave display
          is configured in reference to the view of the master display.
          Navigation on the system is done from the master instance and the
          location on the master is broadcast to the slaves over UDP. The slave
          instances, knowing their own locations in reference to the master,
          then change their views accordingly. The Liquid Galaxy Project, while
          making use of Google Earth software, does not develop the Google Earth
          code-base itself. Google Earth is not open source software, although
          it is free (as in beer). Instead, the Liquid Galaxy Project works on
          extending the Liquid Galaxy system with open source software both
          improving its administration and enabling open source applications, so
          that content of various types can be displayed in the immersive
          panoramic environment.
        </p>
        <h1 className=" text-3xl flex mx-auto p-10">
          Master Slave Architecture :-
        </h1>
        <p>
          The master-slave architecture is a design pattern commonly used in
          computing and communication systems where one device or process, known
          as the master, controls and directs the actions of other devices or
          processes, known as slaves. The master device or process typically
          initiates and coordinates activities, while the slave devices or
          processes respond to commands from the master. 
        </p>
        <br />
        <h1 className=" text-3xl flex mx-auto p-10">Master:</h1>
        <p>
          <br />
          1. The central controlling entity that initiates commands and manages
          the overall operation.
          <br />
          2. It has the authority to issue commands and make decisions.
          <br />
          3. Examples: In a network, a central server controlling client
          devices; in a database system, a primary server managing replicas.
        </p>{" "}
        <div className=" flex flex-col gap-6 p-14 w-full">
          <img src={master} className="bg-white mx-auto " />
        </div>
        <h1 className=" text-3xl flex mx-auto p-10 ">Slave:</h1>
        <p>
          1. Devices or processes that operate under the control and direction
          of the master.
          <br />
          2. They perform tasks assigned by the master and respond to its
          commands.
          <br />
          3. Examples: Networked devices (slaves) responding to commands from a
          central server; replica databases synchronized with the primary
          database.
        </p>{" "}
      </div>
    </div>
    //   </div>
  );
}
