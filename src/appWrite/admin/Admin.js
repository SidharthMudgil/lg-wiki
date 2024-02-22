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


  const remove = async(id)=>{

   
try {
  const deleteDoc =await uploadService.deleteDocument(id)
  if (deleteDoc != null) {
    // console.log("deleted");
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
          <p className="text-white font-mono capitalize  text-xl m-3  hover:cursor-pointer ">
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
          <div className="container max-w-6xl  px-25 mx-auto">
            <h2 className="text-2xl font-bold mb-4">Posts</h2>
            <table className=" w-full bg-[#696f6e] divide-y divide-gray-200">
              <thead className="bg-[#696f6e] divide-y divide-gray-200">
                <tr>
                  {/* <th className="px-4 py-3 text-left text-xl font-medium text-gray-50 uppercase ">
                    User ID
                  </th> */}
                  <th className="px-4 py-3 text-left text-xl font-medium text-gray-50 uppercase ">
                    Title
                  </th>
                  <th className=" w-1/4  px-4 py-3 text-left text-xl font-medium text-gray-50  uppercase ">
                    Content
                  </th>
                  <th className="px-4 py-3 text-left text-xl font-medium text-gray-50 uppercase ">
                    image
                  </th>
                  <th className="px-4 py-3 text-left text-xl font-medium text-gray-50 uppercase ">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-[#696f6e] divide-y divide-gray-200 text-white">
                {fetchData &&
                  fetchData.map((post) => {
                   
                    return (
                      <tr key={post.id}>
                        {/* <td className="px-4 py-4 whitespace-nowrap" >
                          {post.userID}
                        </td> */}
                        <td className="px-4 py-4 ">
                          {post.title}
                        </td>
                        <td className="px-4 py-4   ">
                        <Markdown
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
      />
                  
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          {post.imageDocs}
                        </td>
                        <td
                        className="px-4 py-4 whitespace-nowrap"
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
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap items-center text-red-600" onClick={()=>{remove(post.$id)}}>
                       <i className="fa-solid fa-trash "></i>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
