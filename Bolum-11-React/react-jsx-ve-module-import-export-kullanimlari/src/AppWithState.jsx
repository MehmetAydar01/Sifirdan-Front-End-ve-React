import Counter from './components/Counter';
import MultipleImages from './components/MultipleImages';

// useState => durum bilgisi ve durum bilgisini degistirecek fonksiyon

export default function AppWithState() {
  return (
    <>
      <h1>State Konusunu Burada Isliyoruz</h1>
      <Counter />
      <hr />
      <MultipleImages />
    </>
  );
}
