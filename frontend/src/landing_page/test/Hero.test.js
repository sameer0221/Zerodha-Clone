import React from 'react';
import {render, screen} from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
import Hero from "../home/Hero";
describe('Hero Component', ()=>{
    test("renders hero image", () => {
        render(<Hero/>)
        const heroImage = screen.getAllByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
    });
});