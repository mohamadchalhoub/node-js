import img from "./imgs/img.jpg";

const Home = () => {
  return (
    <div>
    <div className="blog-content">
      <h1>Blog title</h1>
      <h4>Author</h4> <span>Category | Country | created time: date</span>
      <br /> <br />
      <img src={img} style={{ height: 350, width: 600 }} alt="view" />
      <br /> <br />
      <article>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        perspiciatis natus expedita officiis corrupti porro ipsum minima,
        voluptate, tempore culpa dolor nesciunt sapiente consequatur deserunt
        nostrum deleniti est veniam distinctio at sint similique quos! Nam fugit
        eos iure. Inventore autem consectetur quo atque vitae! Harum quia
        perferendis explicabo earum culpa fuga ab voluptates, accusamus quod
        laudantium veniam odio! Molestiae nobis minus soluta, odit, in illum
        nihil explicabo iusto voluptatem alias non deserunt eligendi accusamus,
        laborum placeat incidunt consequuntur sit quam! Sunt sint nisi,
        consequatur aliquam sapiente repellat nostrum nam ipsam enim eius error
        repudiandae voluptate sequi praesentium dolorem voluptatibus cumque
        alias tempore quasi commodi minus veniam. Incidunt accusantium eos vero
        earum voluptatibus voluptatem, autem, esse aliquam recusandae neque
        tempora ex eius pariatur optio inventore enim minus porro officiis!
        Tempora minima harum ea odio placeat aliquam culpa ullam saepe adipisci.
        Est quas pariatur repellendus facilis id sit quo quis dicta nesciunt
        mollitia? Neque beatae est, mollitia animi veritatis impedit quisquam
        non. Distinctio, itaque accusantium dignissimos doloremque tenetur
        fugit! Eaque repudiandae voluptates dolorem dignissimos. Hic at quam
        atque ratione. Labore dignissimos voluptatibus voluptas nostrum facere
        nam cum fuga tempora fugiat hic. Animi molestiae, ea, enim beatae veniam
        architecto totam libero aliquid iste vero excepturi aperiam. Excepturi
        iure laudantium suscipit voluptatem minima facilis sunt nostrum, iste
        voluptatibus unde enim velit adipisci sapiente modi cupiditate voluptas,
        libero distinctio. Voluptas quidem maxime impedit quis dolore, officiis
        animi magni itaque, sunt beatae voluptatum? Vel, ut? Quaerat et velit
        eligendi illum est vitae quia at placeat expedita.
      </article> <br/> <br/>
      <label for="form"><strong>Leave your comment</strong> </label>
      <form className="form"> <br/>
        <label for="input">Name: </label>
        <input type="text" required></input> <br/> <br/>
        <label for="input">Email: </label>
        <input type="text" required></input> <br/> <br/>
        <label for="textarea">Comment: </label> <br/> <br/>
        <textarea name="" id="" cols="30" rows="10" required>your comment...</textarea> <br/> <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default Home;
