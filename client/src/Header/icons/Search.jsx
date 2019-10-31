import React from "react";

export default class SVG extends React.Component {
   render() {
      return (<svg
         className="icon"
         viewBox="0 0 24 24"
         xmlns="http://www.w3.org/2000/svg"
         xmlnsXlink="http://www.w3.org/1999/xlink"
      >
         <path d="M960 832L710.875 582.875C746.438 524.812 768 457.156 768 384 768 171.96900000000005 596 0 384 0 171.969 0 0 171.96900000000005 0 384c0 212 171.969 384 384 384 73.156 0 140.812-21.562 198.875-57L832 960c17.5 17.5 46.5 17.375 64 0l64-64C977.5 878.5 977.5 849.5 960 832zM384 640c-141.375 0-256-114.625-256-256s114.625-256 256-256 256 114.625 256 256S525.375 640 384 640z" />
      </svg>
      )
   }
}