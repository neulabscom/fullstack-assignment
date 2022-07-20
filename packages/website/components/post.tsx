import Image from "next/image"
import {css} from '@emotion/css'

const postUX=(props)=>{
    const post=props.post
    const user=props.user
    return(
        <article key={props.post.id} className={css`
            width:304px;
            height:400px;
            margin:1rem;
            border-radius:32px;
            overflow:hidden;
            box-shadow: 0px 2px 2px rgb(0 0 0 / 20%);
            display:flex;
            flex-direction:column;
            ${props.red?'border-color:red;border-style:solid;':''}
            &:hover{
                transform:translate(0px,-2px)
            }
        `}>
            <Image src={`https://picsum.photos/304/156?${post.id}`} width={364} height={156} className={css`max-height:156px;flex-grow:none`}/>
                <h1 className={css`font-family: Comfortaa,Arial,sans-serif;font-size: 15px; font-weight:300; margin:1rem; margin-top:0;`}>{post.title}</h1>
                <p className={css` margin:1rem; margin-bottom:auto;margin-top:0`}>A{props.red}A</p>
                <p className={css` margin:1rem; margin-bottom:auto;margin-top:0`}>{post.body}</p>
                <div className={css`margin:1rem;display:flex;align-items:center;font-size:14px;line-height:20px;font-family: "Kumbh Sans",sans-serif;`}>
                    <div><Image src={`https://randomuser.me/api/portraits/men/${user.id}.jpg`} width={40} height={40} className={css`border-radius:100%`} /></div>
                    <p>{user.name}</p>
                    <p className={css`margin-right:0`}>{user.email}</p>
                </div>
            
        </article>
    )
}

export default postUX