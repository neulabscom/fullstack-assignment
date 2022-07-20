import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Image from "next/image"

//styles
const Post= styled.div`${props=>css`
width:304px;
height:400px;
margin:1rem;
border-radius:32px;
overflow:hidden;
box-shadow: 0px 2px 2px rgb(0 0 0 / 20%);
display:flex;
flex-direction:column;
${props.red?'border-color:red;border-style:solid;':''};
&:hover{
    transform:translate(0px,-2px)
}
`}`
const Title= styled.p`color: darkolivegreen;margin:1rem; margin-bottom:auto;margin-top:0font-weight: 700;font-size: 20px;line-height: 26px;font-family: Comfortaa,Arial,sans-serif;&::first-letter{text-transform:Uppercase`
const Cover=styled.img`max-height:156px;flex-grow:none`
const PostH1=styled.h1`font-family: Comfortaa,Arial,sans-serif;font-size: 15px; font-weight:300; margin:1rem; margin-top:0;`
const Signature=styled.div`margin:1rem;display:flex;align-items:center;font-size:14px;line-height:20px;font-family: "Kumbh Sans",sans-serif;}`
const Avatar=styled.img`border-radius:100%;max-width:40px`

//layout
const postUX=(props)=>{
    const post=props.post
    const user=props.user
    return(
        <Post red={props.red} key={props.post.id} >
            <Image src={`https://picsum.photos/304/156?${post.id}`} width={364} height={156}/>
                <PostH1>{post.category}</PostH1>
                <Title>{post.title}</Title>
                <Signature>
                    <div>
                        <Avatar src={`https://randomuser.me/api/portraits/men/${user.id}.jpg`}></Avatar>
                    </div>
                    <p>{user.name}</p>
                    <p >{user.email}</p>

                </Signature>
        </Post>
    )
}

export default postUX