

const resolver = {

    Query:{
        users: () => User.find(),
        user: (id) => User.find({id: id}),

    },
    Mutation:{

    }

}


export default resolver;