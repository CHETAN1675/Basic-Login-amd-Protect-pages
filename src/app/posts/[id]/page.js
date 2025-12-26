import React from 'react'

export async function generateMetadata({params}){
    const {id} = await params;
    return {
        "title":`Post ${id}`
    }
}

async function PostDetail({params}) {
    const {id} = await params;
    return (
        <div>
            This is post {id}
            
        </div>
    )
}

export default PostDetail