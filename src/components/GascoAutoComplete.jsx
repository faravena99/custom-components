
export const GascoAutoComplete = () => {
  const suggestionList = ["gas", "gasco", "web", "component"];
  const autocomplete = document.querySelector("gasco-autocomplete");



  return (
    <>
      <gasco-autocomplete></gasco-autocomplete>

      <gasco-autocomplete disabled></gasco-autocomplete>

      <gasco-autocomplete placeholder="Gasco"></gasco-autocomplete>

      <gasco-autocomplete value={suggestionList}></gasco-autocomplete>
    </>
  );
};
