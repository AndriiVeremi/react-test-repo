import data from '../../data/menu.json';
console.log(data);

const CategoryList = ({ data }) => {
  return (
    <div>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <img src="" alt={`${item.title}`} />
            <div>
              <h3>{item.title}</h3>
              <button>add to Card</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

CategoryList(data);

export default CategoryList;
