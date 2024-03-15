import React, { useEffect, useState } from "react";
import uploadService from "../services/uplaod";
import { Query } from "appwrite";
import { useDispatch } from "react-redux";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import "../../docs/DynamicTitle.css";
import remarkGfm from "remark-gfm";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { NavLink } from "react-router-dom";
import Auth from "../services/auth";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  
  const navigate = useNavigate();
  const [fetchData, setFetchData] = useState([]);
  const [query, setQuery] = useState(true);
  const [loading, setLoading] = useState("true");
  const dispatch = useDispatch();
  const[color, setcolor]=useState();
  const [userdata,setuserdata]=useState();
  useEffect( () => {
  
  
    fetchContent();
  }, [query]);

  const fetchContent = async () => {
    try {
      const  fliedata = await Auth.getCurrentUser()
    
      setuserdata(fliedata)
      const queries = [Query.equal("status", query ? "active" : "deactive")];
      setFetchData([]);
      const response = await uploadService.getPosts(queries);
      const document = response.documents;
      setFetchData(document);
    } catch (error) {
      console.error("Error fetching data:  ", error);
    }
  };


  const handleUnapprovedClick = () => {
   setcolor(false);
    setQuery(false);
  };
  const approved = async (id) => {
    const Active = await uploadService.updatePost(id, { status: "active" });
   
    if (Active != null) {
      console.log("update");
      alert("updated to approved")
      fetchContent();
    }
  };

  const handleApprovedClick = () => {
    setcolor(true);

    
    setQuery(true);
  };


// TODO:"MAKE THAT USER ADMIN CNA DELETE"


const remove = async (id) => {
  try {
    const post = await uploadService.getPost(id);
    let imgdel=post.imageID;
    await uploadService.deleteDocument(id);

   


  for (const item of imgdel) {
    await uploadService.deleteFile(item);
  }
  fetchContent();

   alert("deleted succesfully")
  } catch (error) {
    console.log(error);
  }
}


// remove user create  , premission 

  return userdata?(
    <>
      
      <div className="admin-nav">
        <div className="left-nav h-screen w-52  flex float-left text-left  px-2 flex-col  bg-[#293130]  bg-gradient-to-b">
          {" "}
          <p className="text-white font-mono capitalize  text-xl m-3   ">
            {" "}
            welcome admin
          </p>{" "}
          <NavLink 
           
            className="text-white font-mono capitalize  text-xl m-3  hover:cursor-pointer "
            onClick={handleApprovedClick}
            id="approved"
            style={{ color: color ? "#f5a942" : "#ffffff" }}
          >
            approved{" "}
          </NavLink>
          <NavLink
       
            className="text-white font-mono capitalize  text-xl m-3  hover:cursor-pointer "
            onClick={handleUnapprovedClick}
            id="unapproved"
            style={{ color: color ? "#ffffff" : "#f5a942" }}
          >
            unapproved
          </NavLink>
          {/* <p className="text-white font-mono capitalize  text-xl m-3  hover:  ">user</p> */}
          {/* <p className="text-white font-mono capitalize  text-xl m-3"></p>{" "} */}
        </div>
        <div className="right-nav h-screen justify-center flex  bg-[#121615] text-lg font-bold">

          <div className="container flex flex-col p-12 pb-0">
          <div className={" divide-y divide-gray-200 text-white"}>

          {fetchData.length!==0? fetchData &&
                  fetchData.map((post,index) => { 
                    return (
                   
                      <div className={"bg-[#" + (index % 2 === 0 ? "121615" : "1e2524") + "]"}>
           <div className="px-20" key={post.id}>
              <div className="text-xl  py-10 border-b-2 border-white"> Title :  {post.title}</div> 
          
                <div className="py-5"> Content  : <Markdown
        children={post.markdown}
        remarkPlugins={[remarkGfm]}
        className="dynamic-output  w-[43rem]"
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
          },ul({ node, ...props }) {
            return <ul {...props} />;
          },
          img: ({ node, ...props }) => {
            
            return <img {...props} />;
          },
          li({ node, ...props }) {
            return <li {...props} />;
          },
        }}
      /></div>
            
<div  className="px-4 py-4 whitespace-nowrap"
                       
                      >
                        <div className="flex  flex-row w-full justify-between border-t-2 border-b-2 border-white">

<div className="text-lg  py-10  flex "> Email :  {post.userID} </div>   
  <div className="text-lg  py-10 flex "> Name : {post.userName} </div>
  </div>
  <div className="flex  flex-row w-full justify-between p-10 hover:cursor-pointer">

                        <p  className={
                        post.status === "active"
                          ? "p-3 w-min bg-green-400 text-white rounded-2xl hover:cursor-pointer"
                          : "p-3 w-min bg-red-400 text-white rounded-2xl hover:cursor-pointer"
                      }  onClick={() => {
                        post.status = post.status === "active" ? null : approved(post.$id);
                      }} >{ post.status === "active" ? "approved" : "approve"}
                        </p>

                       <i className="fa-solid fa-trash px-4 py-4 whitespace-nowrap hover:cursor-pointer items-center text-red-600" onClick={()=>{remove(post.$id)}}  ></i>
      </div>  </div>        </div>     </div>
)}):<p className="text-center capitalize" > nothing to approve</p>}

</div></div>
               
                 </div>  
      </div>
    </>
  ):navigate('/login');
}
