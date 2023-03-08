import { createGlobalStyle, GlobalStyleComponent } from 'styled-components';

export const GlobalStyle: GlobalStyleComponent<{}, {}> = createGlobalStyle`
    :root {
        // font family
        --primary-font: 'Poppins', sans-serif;
        --secondary-font: 'SPACE EXPLORER', sans-serif; 
        
        // color
        --primary-color: #9D8E8E;
    }
`;
