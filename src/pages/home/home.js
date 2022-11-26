import { useEffect, useState } from "react";
import Loading from "../../components/footer/components/loading";
import Pagination from "../../components/pagination/pagination";
import useApi from "../../Hooks/useApi";
import CategoryBox from "./components/category_Box";

function Home() {
  const api = useApi();
  const [categories, setCategries] = useState(null);

  //pagination States

  const [pageLength, setPageLength] = useState(6);
  const [pageStart, setPageStart] = useState(0);
  const [totalPageCount, setTotalPageCount] = useState(0);

  useEffect(() => {
    getCategoryPage(pageLength, pageStart);
  }, []);

  useEffect(() => {
    getCategoryPage(pageLength, pageStart);
  }, [pageLength, pageStart]);

  const getCategoryPage = (length, start) => {
    api
      .get("/public/categories/listMainCategories", {
        params: { length, start },
      })
      .then((result) => {
        console.log(">>API RESULT", result);
        setCategries(result.data.data);

        //Toplam Satır sayısı:23
        //Sayfa basına satır sayısı: 6
        // Toplam Sayfa Sayısı Math.ceil(23/6)

        //Math.round(0.1) =0  Math.round(0.5)=1 Math.floor(0.9)=0 Math.ceil(0.1)=1
        setTotalPageCount(
          Math.ceil(parseInt(result.data.recordsTotal) / pageLength)
        );
      })
      .catch((err) => {
        console.error(">>API ERROR", err);
      });
  };

  let categoryArray = [];

  if (categories) {
    //kategori listesini componentlere ekle
    categories.map((item, index) => {
      categoryArray.push(
        <CategoryBox
          key={index}
          id={item.id}
          name={item.name}
          href={`#/category/${item.slug}`}
          image={item.image}
        />
      );
    });
  } else {
    //loading ekranı göster
    categoryArray.push(<Loading key="0" />);
  }

  const pageComponents = [];

  for (let i = 0; i < totalPageCount; i++) {
   
    pageComponents.push(
      
      <button
        key={i}
        onClick={() => setPageStart(i * pageLength)}
        className="btn btn-sm btn-primary mx-2"
      >
        {i}
      </button>
    );
  }

  const lengthSelectComponents = [];
  for (let i = 0; i < 3; i++) {
    
    lengthSelectComponents.push(
      
      
      <button
        key={i}
        onClick={() => setPageLength((i + 1) * 3)}
        className="btn btn-primary mx-2"
      >
        {(i + 1) * 3}
      </button>
    );
  }

  return (
    <main>
      <Pagination
        remoteUrl="/public/categories/listMainCategories"
        title="Categories"
        
      />

      
    </main>
  );
}

export default Home;
