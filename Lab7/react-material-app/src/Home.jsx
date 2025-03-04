import React from 'react'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({

    control: {
        padding: theme.spacing(2),
    },
}));

export default function Home() {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={spacing}>
                    {[0, 1, 2].map((value) => (
                        <Grid key={value} item>
                            <Button variant="contained" color="secondary" onClick={() => { alert('Kliknąłeś przycisk') }}>Kliknij mnie</Button>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <Grid item xs={12} container justify="center">
                <Paper className={classes.control}>
                    <Grid container>
                        <Grid item>
                            <FormLabel>Wybierz odstęp pomiędzy przyciskami
                </FormLabel>
                            <RadioGroup
                                name="spacing"
                                aria-label="spacing"
                                value={spacing.toString()}
                                onChange={handleChange}
                                row
                            >
                                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                                    <FormControlLabel
                                        key={value}
                                        value={value.toString()}
                                        control={<Radio />}
                                        label={value.toString()}
                                    />
                                ))}
                            </RadioGroup>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}

