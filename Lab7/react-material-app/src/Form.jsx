import React from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';



export default function Form() {

  const [value, setValue] = React.useState('female');
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className="" noValidate autoComplete="off">
      <br />
      <FormLabel component="legend">Podaj imię i nazwisko</FormLabel>
      <TextField label="Imię" variant="filled" />
      <TextField label="Nazwisko" variant="filled" />
      <br />

      <br />
      <FormControl component="fieldset">
        <FormLabel component="legend">Wybierz swoja płeć</FormLabel>
        <RadioGroup value={value} onChange={handleChange}>
          <FormControlLabel value="female" control={<Radio />} label="Kobieta" />
          <FormControlLabel value="male" control={<Radio />} label="Mężczyzna" />
        </RadioGroup>
      </FormControl>

      <br />
      <FormLabel component="legend">Wybierz datę urodzenia</FormLabel>
      <TextField
        id="date"
        type="date"
        defaultValue="2020-01-01"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}