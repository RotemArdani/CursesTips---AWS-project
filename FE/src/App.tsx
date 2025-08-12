import { courses } from './data/courses';
import CourseCard from './components/CourseCard';

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Courses Tips</h1>
      <div style={styles.grid}>
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            courseId={course.id}
            courseName={course.name}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: '2rem',
    fontFamily: 'sans-serif',
    backgroundColor: '#000033',
    minHeight: '100vh',  
  },
  title: {
    textAlign: 'center',
    marginBottom: '2rem',
    fontWeight: 'bold',       
    fontSize: '3rem',         
    color: 'lightblue',      
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1rem',
  },
};
