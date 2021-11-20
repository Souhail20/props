import './App.css';
import Welcome from './Profile/Welcome';
const App = () => {
  const handleName = FullName => alert(FullName);
  return (
    <div>
      <Welcome FullName={"Souhail khaled"} Bio="Hi iam Souhail" Profession="Fullstack Developer" handleName={handleName}>
      <img src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720__480.jpg" alt="my photos" />
      </Welcome>
      
    </div>
  );
 };

export default App;
