export default{
    name:'brands',
    title:'Brands',
    type:'document',
    fields:[
        {
            name:'imgUrl',
            title:'ImgUrl',
            type:'image',
            options:{
                hospot:true,

            },
        },
        {name:'name',
            title:'Name',
            type:'string'
        }
    ]
}