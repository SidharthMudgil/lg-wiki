import React, { useEffect, useState } from "react";
import uploadService from "../services/uplaod";
import { Query } from "appwrite";
import { useDispatch } from "react-redux";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import "../../docs/DynamicTitle.css";
import remarkGfm from "remark-gfm";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";


export default function Admin() {
  const [fetchData, setFetchData] = useState([]);
  const [query, setQuery] = useState(true);
  const [loading, setLoading] = useState("true");
  const dispatch = useDispatch();

  useEffect(() => {
    
    fetchContent();
  }, [query]);

  const fetchContent = async () => {
    try {
      const queries = [Query.equal("status", query ? "active" : "deactive")];
      setFetchData([]);
      const response = await uploadService.getPosts(queries);
      const document = response.documents;
      setFetchData(document);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleUnapprovedClick = () => {
    setQuery(false);
  };
  const approved = async (id) => {
    const Active = await uploadService.updatePost(id, { status: "active" });

    if (Active != null) {
      console.log("update");
      fetchContent();
    }
  };

  const handleApprovedClick = () => {
    setQuery(true);
  };


// TODO:"MAKE THAT USER ADMIN CNA DELETE"



  const remove = async(id)=>{

   
try {
  const deleteDoc =await uploadService.deleteDocument(id)
  if (deleteDoc != null) {
    console.log("deleted");
    fetchContent();
  }
  
} catch (error) {
  console.log(error);

  
}

  }



  return (
    <>
      
      <div className="admin-nav">
        <div className="left-nav h-screen w-52  flex float-left text-left  px-2 flex-col bg-emerald-700  bg-gradient-to-b">
          {" "}
          <p className="text-white font-mono capitalize  text-xl m-3   ">
            {" "}
            welcome andreu
          </p>{" "}
          <p
            className="text-white font-mono capitalize  text-xl m-3  hover:cursor-pointer "
            onClick={handleApprovedClick}
          >
            approved{" "}
          </p>
          <p
            className="text-white font-mono capitalize  text-xl m-3  hover:cursor-pointer "
            onClick={handleUnapprovedClick}
          >
            unapproved
          </p>
          {/* <p className="text-white font-mono capitalize  text-xl m-3  hover:  ">user</p> */}
          {/* <p className="text-white font-mono capitalize  text-xl m-3"></p>{" "} */}
        </div>
        <div className="right-nav h-screen justify-center flex  bg-[#121615]">

          <div className="container flex flex-col p-12 pb-0">
          <div className="bg-[#696f6e] divide-y  divide-gray-200 text-white">
          {fetchData &&
                  fetchData.map((post) => {return (
                    
           <div className="px-20" key={post.id}>
              <div className="text-xl  py-10 border-b-2 border-white"> {post.title}</div> 
               {/* <div className="text-lg  py-10 border-b-2 border-white"> {post.userId} </div> */}
                <div> <Markdown
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
                        onClick={() => {
                          post.status = post.status === "active" ? null : approved(post.$id);
                        }}
                      >
                        <p  className={
                        post.status === "active"
                          ? "p-3 w-min bg-green-400 text-white rounded-2xl "
                          : "p-3 w-min bg-red-400 text-white rounded-2xl"
                      }>{ post.status === "active" ? "approved" : "approve"}
                        </p>

                       <i className="fa-solid fa-trash px-4 py-4 whitespace-nowrap items-center text-red-600" onClick={()=>{remove(post.$id)}}  ></i>
        </div>        </div>     
)})}

</div></div>
               
                 </div>  
      </div>
    </>
  );
}
