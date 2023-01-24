import { DefaultTheme, ThemeProvider } from "styled-components";
import Head from "./Head";
import { GetProps } from "./Hooks/useFetch";
import usePersistedState from "./Hooks/usePersistedState";
import { GlobalStyle, Section } from "./MyStyles";
import PageItem from "./PageItem";
import dark from "./Themes/dark";
import light from "./Themes/light";

interface HomeProps {
  data: GetProps[];
}
const Home = ({ data }: HomeProps) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head toggleTheme={toggleTheme} />
      <Section>
        {data.map((item) => (
          <div key={item.name}>
            <PageItem data={item} />
          </div>
        ))}
      </Section>
    </ThemeProvider>
  );
};

export default Home;