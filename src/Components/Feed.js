import React from 'react';
import PostCard from './PostCard.js';

const text1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit blandit lectus, ac ullamcorper velit commodo ut. Nunc ultricies auctor velit vitae sagittis. Nunc vehicula, turpis et bibendum accumsan, felis.";
const text2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu nibh sit amet sem vestibulum accumsan et vitae orci. Sed tempor, ipsum sit amet rhoncus maximus, libero lectus ultrices eros, sit amet euismod est quam quis nisi. Aenean hendrerit mattis dignissim. Phasellus sed ante neque. Aliquam suscipit leo tempor, mollis nulla eu, feugiat urna. Vivamus rhoncus vel enim at maximus. Proin convallis ullamcorper metus et feugiat. Nunc neque magna, ultricies sed mauris et, rhoncus vestibulum dolor. Suspendisse interdum dignissim convallis. Sed ut eleifend neque. Nunc pretium felis leo. Vivamus est mauris, pretium auctor nulla ut, ullamcorper pellentesque purus. Proin augue dui, sodales vitae feugiat at, suscipit a orci. Suspendisse iaculis eros sit amet lacinia sodales. ";

function Feed() {
    
    return (
        <div>
            <PostCard text={text1}/>
            <PostCard text={text2}/>
            <PostCard text={text2}/>
        </div>
    );
}

export default Feed;