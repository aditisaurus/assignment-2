import { createServer, Model } from "miragejs"

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      product: Model,
    },

    seeds(server) {
      server.create("product", { id:1,
        title:'T-Shirt',
        category:'Clothes',
        image:'https://raw.githubusercontent.com/aditisinghdeveloper/assignment-2/master/Watches.jpeg'})
        server.create("product", { id:2,
            title:'T-Shirt',
            category:'Clothes',
            image:'https://raw.githubusercontent.com/aditisinghdeveloper/assignment-2/master/Watches.jpeg'})
            server.create("product", { id:3,
                title:'T-Shirt',
                category:'Clothes',
                image:'https://raw.githubusercontent.com/aditisinghdeveloper/assignment-2/master/Watches.jpeg'})
                server.create("product", { id:4,
                    title:'T-Shirt',
                    category:'Clothes',
                    image:'https://raw.githubusercontent.com/aditisinghdeveloper/assignment-2/master/Watches.jpeg'})
                    server.create("product", { id:5,
                        title:'T-Shirt',
                        category:'Clothes',
                        image:'https://raw.githubusercontent.com/aditisinghdeveloper/assignment-2/master/Watches.jpeg'})
                        server.create("product", { id:6,
                            title:'T-Shirt',
                            category:'Clothes',
                            image:'https://raw.githubusercontent.com/aditisinghdeveloper/assignment-2/master/Watches.jpeg'})
                            server.create("product", { id:7,
                                title:'T-Shirt',
                                category:'Clothes',
                                image:'https://raw.githubusercontent.com/aditisinghdeveloper/assignment-2/master/Watches.jpeg'})
                                server.create("product", { id:8,
                                    title:'T-Shirt',
                                    category:'Clothes',
                                    image:'https://raw.githubusercontent.com/aditisinghdeveloper/assignment-2/master/Watches.jpeg'})

         server.create("product", { id:9,
         title:'Rolex',
         category:'Watches',
         image:'https://raw.githubusercontent.com/aditisinghdeveloper/assignment-2/master/Watches.jpeg'})
         server.create("product", { id:10,
            title:'Rolex',
            category:'Watches',
            image:'https://raw.githubusercontent.com/aditisinghdeveloper/assignment-2/master/Watches.jpeg'})
            server.create("product", { id:11,
                title:'Rolex',
                category:'Watches',
                image:'https://raw.githubusercontent.com/aditisinghdeveloper/assignment-2/master/Watches.jpeg'})
                server.create("product", { id:12,
                    title:'Rolex',
                    category:'Watches',
                    image:'https://raw.githubusercontent.com/aditisinghdeveloper/assignment-2/master/Watches.jpeg'})
                    server.create("product", { id:13,
                        title:'Rolex',
                        category:'Watches',
                        image:'https://raw.githubusercontent.com/aditisinghdeveloper/assignment-2/master/Watches.jpeg'})
                        server.create("product", { id:14,
                            title:'Rolex',
                            category:'Watches',
                            image:'https://raw.githubusercontent.com/aditisinghdeveloper/assignment-2/master/Watches.jpeg'})
                            server.create("product", { id:15,
                                title:'Rolex',
                                category:'Watches',
                                image:'https://raw.githubusercontent.com/aditisinghdeveloper/assignment-2/master/Watches.jpeg'})
        
        server.create("product", { id:16,
        title:'Ajanta',
        category:'Clocks',
        image:'https://raw.githubusercontent.com/aditisinghdeveloper/assignment-2/master/Clock.jpeg'})
        server.create("product", { id:17,
            title:'Ajanta',
            category:'Clocks',
            image:'https://raw.githubusercontent.com/aditisinghdeveloper/assignment-2/master/Clock.jpeg'})
            server.create("product", { id:18,
                title:'Ajanta',
                category:'Clocks',
                image:'https://raw.githubusercontent.com/aditisinghdeveloper/assignment-2/master/Clock.jpeg'})
                server.create("product", { id:19,
                    title:'Ajanta',
                    category:'Clocks',
                    image:'https://raw.githubusercontent.com/aditisinghdeveloper/assignment-2/master/Clock.jpeg'})
                    server.create("product", { id:20,
                        title:'Ajanta',
                        category:'Clocks',
                        image:'https://raw.githubusercontent.com/aditisinghdeveloper/assignment-2/master/Clock.jpeg'})
                        server.create("product", { id:21,
                            title:'Ajanta',
                            category:'Clocks',
                            image:'https://raw.githubusercontent.com/aditisinghdeveloper/assignment-2/master/Clock.jpeg'})
                            server.create("product", { id:22,
                                title:'Ajanta',
                                category:'Clocks',
                                image:'https://raw.githubusercontent.com/aditisinghdeveloper/assignment-2/master/Clock.jpeg'})
      
    },

    routes() {
      this.namespace = "api"

      this.get("/products", (schema) => {
        return schema.products.all()
      })
    },
  })

  return server
}