import { createServer, Model } from "miragejs"

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      product: Model,
    },

    seeds(server) {
      server.create("product", { id:1, frequency:1,
        title:'T-Shirt',
        category:'Clothes',
        image:'https://raw.githubusercontent.com/aditisinghdeveloper/assignment-2/master/Clothes.jpeg'})
        server.create("product", { id:2, frequency:1,
            title:'T-Shirt',
            category:'Clothes',
            image:'https://raw.githubusercontent.com/aditisinghdeveloper/assignment-2/master/Clothes.jpeg'})
            server.create("product", { id:3, frequency:1,
                title:'T-Shirt',
                category:'Clothes',
                image:'https://raw.githubusercontent.com/aditisinghdeveloper/assignment-2/master/Clothes.jpeg'})
                server.create("product", { id:4, frequency:1,
                    title:'T-Shirt',
                    category:'Clothes',
                    image:'https://raw.githubusercontent.com/aditisinghdeveloper/assignment-2/master/Clothes.jpeg'})
                    server.create("product", { id:5, frequency:1,
                        title:'T-Shirt',
                        category:'Clothes',
                        image:'https://raw.githubusercontent.com/aditisinghdeveloper/assignment-2/master/Clothes.jpeg'})
                        server.create("product", { id:6, frequency:1,
                            title:'T-Shirt',
                            category:'Clothes',
                            image:'https://raw.githubusercontent.com/aditisinghdeveloper/assignment-2/master/Clothes.jpeg'})
                            server.create("product", { id:7, frequency:1,
                                title:'T-Shirt',
                                category:'Clothes',
                                image:'https://raw.githubusercontent.com/aditisinghdeveloper/assignment-2/master/Clothes.jpeg'})
                                server.create("product", { id:8, frequency:1,
                                    title:'T-Shirt',
                                    category:'Clothes',
                                    image:'https://raw.githubusercontent.com/aditisinghdeveloper/assignment-2/master/Clothes.jpeg'})

         server.create("product", { id:9, frequency:1,
         title:'Rolex',
         category:'Watches',
         image:'https://raw.githubusercontent.com/aditisinghdeveloper/assignment-2/master/Watches.jpeg'})
         server.create("product", { id:10, frequency:1,
            title:'Rolex',
            category:'Watches',
            image:'https://raw.githubusercontent.com/aditisinghdeveloper/assignment-2/master/Watches.jpeg'})
            server.create("product", { id:11, frequency:1,
                title:'Rolex',
                category:'Watches',
                image:'https://raw.githubusercontent.com/aditisinghdeveloper/assignment-2/master/Watches.jpeg'})
                server.create("product", { id:12, frequency:1,
                    title:'Rolex',
                    category:'Watches',
                    image:'https://raw.githubusercontent.com/aditisinghdeveloper/assignment-2/master/Watches.jpeg'})
                    server.create("product", { id:13, frequency:1,
                        title:'Rolex',
                        category:'Watches',
                        image:'https://raw.githubusercontent.com/aditisinghdeveloper/assignment-2/master/Watches.jpeg'})
                        server.create("product", { id:14, frequency:1,
                            title:'Rolex',
                            category:'Watches',
                            image:'https://raw.githubusercontent.com/aditisinghdeveloper/assignment-2/master/Watches.jpeg'})
                            server.create("product", { id:15, frequency:1,
                                title:'Rolex',
                                category:'Watches',
                                image:'https://raw.githubusercontent.com/aditisinghdeveloper/assignment-2/master/Watches.jpeg'})
        
        server.create("product", { id:16, frequency:1,
        title:'Ajanta',
        category:'Clocks',
        image:'https://raw.githubusercontent.com/aditisinghdeveloper/assignment-2/master/Clock.jpeg'})
        server.create("product", { id:17, frequency:1,
            title:'Ajanta',
            category:'Clocks',
            image:'https://raw.githubusercontent.com/aditisinghdeveloper/assignment-2/master/Clock.jpeg'})
            server.create("product", { id:18, frequency:1,
                title:'Ajanta',
                category:'Clocks',
                image:'https://raw.githubusercontent.com/aditisinghdeveloper/assignment-2/master/Clock.jpeg'})
                server.create("product", { id:19, frequency:1,
                    title:'Ajanta',
                    category:'Clocks',
                    image:'https://raw.githubusercontent.com/aditisinghdeveloper/assignment-2/master/Clock.jpeg'})
                    server.create("product", { id:20, frequency:1,
                        title:'Ajanta',
                        category:'Clocks',
                        image:'https://raw.githubusercontent.com/aditisinghdeveloper/assignment-2/master/Clock.jpeg'})
                        server.create("product", { id:21, frequency:1,
                            title:'Ajanta',
                            category:'Clocks',
                            image:'https://raw.githubusercontent.com/aditisinghdeveloper/assignment-2/master/Clock.jpeg'})
                            server.create("product", { id:22, frequency:1,
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