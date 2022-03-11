import React from 'react';
import styled, { css } from 'styled-components';
import { Layout, Button } from '../components';
import { breakpoints } from '../config';
import rallyImage from '../assets/ukraine-rally.jpeg';
import odessaImage from '../assets/ukraine-odessa.jpeg';
import sleepingBagImage from '../assets/ukraine-amazon/1-sleeping-bag.jpeg';
import mobileBedImage from '../assets/ukraine-amazon/2-mobile-bed.jpeg';
import containerImage from '../assets/ukraine-amazon/3-container.jpeg';
import cupImage from '../assets/ukraine-amazon/4-cup.jpeg';
import laptopImage from '../assets/ukraine-amazon/5-laptop.jpeg';
import powerBankImage from '../assets/ukraine-amazon/6-power-bank.jpeg';
import thermalUnderImage from '../assets/ukraine-amazon/7-thermal-under.jpeg';
import flashlightImage from '../assets/ukraine-amazon/8-flashlight.jpeg';
import glovesImage from '../assets/ukraine-amazon/9-gloves.jpeg';
import printerImage from '../assets/ukraine-amazon/10-printer.jpeg';

const PRODUCTS = [
  {
    title: 'Sleeping Bag',
    description:
      'FARLAND Sleeping Bags 20℉ for Adults Teens Kids with Compression Sack Portable and Lightweight for 3-4 Season Camping, Hiking,Waterproof, Backpacking and Outdoors',
    image: sleepingBagImage,
  },
  {
    title: 'Sleeping Cot',
    description:
      'Naturehike Ultralight Folding Camping Cot, Portable Compact Backpacking Cot for Adults Camping, Hiking, Travel, Heavy Duty Support 330 Lbs',
    image: mobileBedImage,
  },
  {
    title: 'Reusable Food Containers & Dishware',
    description:
      'UCO 4-Piece Camping Mess Kit with Bowl, Plate and 3-in-1 Spork Utensil Set',
    image: containerImage,
  },
  {
    title: 'Thermal Cups',
    description:
      'Stanley Classic Vacuum Insulated Wide Mouth Bottle - BPA-Free 18/8 Stainless Steel Thermos for Cold & Hot Beverages – Keeps Liquid Hot or Cold for Up to 24 Hours',
    image: cupImage,
  },
  {
    title: 'Laptops',
    description:
      'ASUS Laptop L210 11.6” Ultra Thin, Intel Celeron N4020 Processor, 4GB RAM, 64GB eMMC Storage, Windows 10 Home in S Mode with One Year of Office 365 Personal, L210MA-DB02,Star Black',
    image: laptopImage,
  },
  {
    title: 'Powerbanks',
    description:
      'Solar Power Bank, Qi Portable Charger 10,000mAh External Battery Pack Type C Input Port Dual Flashlight, Compass, Solar Panel Charging',
    image: powerBankImage,
  },
  {
    title: 'Thermal Underwear',
    description:
      'WEERTI Thermal Underwear for Men, Long Johns Base Layer Fleece Lined Top Bottom',
    image: thermalUnderImage,
  },
  {
    title: 'Flashlight',
    description:
      '2 Pack Tactical Flashlight Torch, Military Grade 5 Modes XML T6 3000 Lumens Tactical Led Waterproof Handheld Flashlight for Camping Biking Hiking Outdoor Home Emergency',
    image: flashlightImage,
  },
  {
    title: 'Tactical Gloves',
    description:
      'KEMIMOTO Tactical Gloves, Touchscreen Military Gloves with Hard Knuckle for Hunting Shooting Hiking Airsoft Camping Paintball Army Training',
    image: glovesImage,
  },
  {
    title: 'Continuous Inkjet Printer',
    description:
      'Canon PIXMA TR Series All-in-One Wireless Color Inkjet Printer for Business Home Office, Black - Print, Scan, Copy, Fax - 4800 x 1200 dpi, Auto 2-Sided Printing, 8.5 x 14 Max Print Size, 20-Sheet ADF',
    image: printerImage,
  },
];

const LINKS = [
  {
    label: '📝 Write and call your elected officials',
    url: 'https://docs.google.com/document/d/1s2RFC2nHgTGbI5-Aq8mhesEi__h3xsMWpyeSwXjbJVU/edit',
  },
  {
    label: '📝 Demand the world to help',
    url: 'https://docs.google.com/document/u/2/d/1YOH91yIJ57DL88utH_2bBJPO0pjG1Fo7epZ4IbLDez8/mobilebasic',
  },
  {
    label: '📝 Contact your congressional representatives',
    url: 'https://actionnetwork.org/letters/stand-with-ukraine',
  },
  {
    label: '📍 Participate in rallies and events',
    url: 'https://www.stopputin.net/',
  },
  {
    label: "🪖 Donate directly to Ukraine's Armed Forces",
    url: 'https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi',
  },
  {
    label: '🦺 Donate for helmets and vests',
    url: 'https://www.facebook.com/donate/3129928640587218',
  },
  {
    label: "🆘 Donate to Razom's Emergency Response",
    url: 'https://razomforukraine.org/donate/',
  },
  {
    label: '🤝 Donate for humanitarian aid',
    url: 'https://www.facebook.com/donate/1137971146948461/',
  },
  {
    label: '🏥 Donate for hospital aid',
    url: 'https://4agc.com/fundraiser_pages/e9aca7e4-13d5-4e67-b6bd-548f94822793',
  },
  {
    label: '⛑ Donate to Red Cross',
    url: 'https://www.icrc.org/en/donate/ukraine',
  },
  {
    label: '🪙 Donate with cryptocurrency',
    url: 'https://thegivingblock.com/campaigns/ukraine-emergency-response-fund/',
  },
];

const Poster = styled.h1`
  margin-bottom: 4rem;
  width: 100vw;
  color: white;
  font-size: 2rem;
  text-align: center;
  font-family: 'PT Sans', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.25em;

  @media (min-width: ${breakpoints.medium}px) {
    margin-bottom: 6rem;
    font-size: 3rem;
  }
`;

const PosterHalf = styled.div`
  padding: 0.75rem 0;

  ${(props) => css`
    border-top: 4px solid
      ${props.isTop ? 'rgb(0, 91, 187)' : 'rgba(255, 213, 0, 0.75)'};
    border-bottom: 4px solid
      ${props.isTop ? 'rgb(0, 91, 187)' : 'rgba(255, 213, 0, 0.75)'};
    background-color: ${props.isTop
      ? 'rgba(0, 91, 187, 0.75)'
      : 'rgba(255, 213, 0, 0.6)'};
  `}

  @media (min-width: ${breakpoints.medium}px) {
    padding: 1.25rem 0;
  }
`;

const CallToAction = styled.div`
  margin-bottom: 4rem;
  text-align: center;

  @media (min-width: ${breakpoints.medium}px) {
    margin-bottom: 6rem;
  }
`;

const HelpButton = styled.a`
  padding: 1rem 2rem;
  border: 1px solid white;
  border-radius: 1em;
  font-weight: bold;
  font-size: 1.2rem;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 20px rgba(255, 213, 0, 0.4);
  transition: background-color ease-in-out 200ms, color ease-in-out 200ms;

  @media (min-width: ${breakpoints.medium}px) {
    padding: 1.5rem 2.5rem;
    font-size: 1.5rem;
  }

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 10px rgba(255, 213, 0, 0.65);
  }
`;

const Card = styled.div`
  margin-bottom: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;
  width: calc(100% - 4rem);
  max-width: 100%;
  padding: 2rem;
  background-color: rgba(0, 91, 187, 0.1);
  border: 4px solid rgba(255, 213, 0, 0.25);
  border-radius: 1em;
  font-size: 1.2rem;
  line-height: 1.5;

  @media (min-width: ${breakpoints.medium}px) {
    margin-bottom: 4rem;
    margin-left: auto;
    margin-right: auto;
    padding: 4rem;
    width: 1200px;
    box-shadow: 0 0 100px rgba(255, 213, 0, 0.1);
    font-size: 1.5rem;
  }
`;

const CardHeading = styled.h2`
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid rgba(0, 0, 0, 0.4);
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.5rem;
  font-family: 'PT Sans', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 1;

  @media (min-width: ${breakpoints.medium}px) {
    font-size: 2rem;
  }
`;

const CardSubheading = styled.h3`
  padding-top: 1rem;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.5rem;
  font-family: 'PT Sans', sans-serif;
  font-weight: bold;
  letter-spacing: 0.05em;
  line-height: 1;

  @media (min-width: ${breakpoints.medium}px) {
    font-size: 2rem;
  }
`;

const CardVideo = styled.div`
  margin-bottom: 1.5rem;
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;

  & iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`;

const CardText = styled.div`
  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  & ol {
    margin-left: 2rem;
  }

  & li > ul {
    font-size: 0.9em;
  }
`;

const CardImageContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const CardLinks = styled.ul`
  list-style: none;

  & li:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const CardLink = styled.a`
  display: block;
  margin-bottom: 2rem;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  text-decoration: none;
  transition: transform ease 200ms;

  &:hover,
  &:focus {
    transform: scale(1.02);
  }
`;

const CardAction = styled.div`
  padding-top: 1rem;
`;

const ProductList = styled.ul`
  margin-bottom: 1.5rem;
  list-style: none;
`;

const ProductItem = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.medium}px) {
    flex-direction: row;
  }

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

const ProductImage = styled.div`
  min-width: 150px;
  height: 150px;
  margin-bottom: 1rem;

  @media (min-width: ${breakpoints.medium}px) {
    min-width: 200px;
    height: 200px;
    margin-bottom: 0;
    margin-right: 1.5rem;
    border-right: 1px solid rgba(255, 255, 255, 0.2);
  }

  & img {
    width: 150px;
    height: 150px;
    object-fit: cover;
  }

  @media (min-width: ${breakpoints.medium}px) {
    & img {
      width: 200px;
      height: 200px;
    }
  }
`;

const ProductContent = styled.div``;

const ProductTitle = styled.div`
  margin-bottom: 0.5rem;
  font-weight: bold;
  font-size: 1.2rem;

  @media (min-width: ${breakpoints.medium}px) {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
`;

const ProductDescription = styled.div`
  font-size: 1rem;

  @media (min-width: ${breakpoints.medium}px) {
    font-size: 1.3rem;
  }
`;

const Iban = styled.code`
  display: block;
  margin-left: 2rem;
`;

export default function SaveUkrainePage({ location }) {
  return (
    <Layout
      title="Save Ukraine"
      description="Hear my story and help Ukraine overcome Putin's invasion."
      image="/meta-ua.png"
      location={location}
    >
      <Poster>
        <PosterHalf isTop>Save</PosterHalf>
        <PosterHalf>Ukraine</PosterHalf>
      </Poster>

      <CallToAction>
        <HelpButton href="#donate">Donate Now</HelpButton>
      </CallToAction>

      <Card>
        <CardHeading>🇺🇦 Our Story</CardHeading>
        <CardImageContainer>
          <img src={rallyImage} alt="" />
        </CardImageContainer>
        <CardText>I was born in Kharkiv. My wife was born in Odessa.</CardText>
        <CardText>
          We live in NYC, but many of our relatives and friends are in Ukraine.
          Recently, the Russian dictator Vladimir Putin started an invasion of
          Ukraine which is a <strong>currently ongoing war</strong>.
        </CardText>
        <CardText>
          I am still in disbelief. The new normalcy used to be just wearing
          masks and quarantining. Now it is running to bunkers and escaping
          bombs. Unfortunately, this is real. I am texting my family and friends
          to make sure that they're still alive.
        </CardText>
        <CardText>
          <em>
            While many of us can choose to ignore this war, that choice is a
            privilege that others don't have. Ukraine needs your help.
          </em>
        </CardText>
        <CardAction>
          <Button as="a" href="#donate">
            Donate Now
          </Button>
        </CardAction>
      </Card>

      <Card>
        <CardHeading>🙏 Help Our Hometown</CardHeading>
        <CardImageContainer>
          <img src={odessaImage} alt="" />
        </CardImageContainer>
        <CardText>
          My wife's cousin, Anton Odegov, is buying food, medicine, and other
          supplies and brings them directly to the Territorial Defense. This is
          a group of <strong>civilians</strong> who now are bearing arms and
          volunteering to defend the city by the soldiers' side.
        </CardText>
        <CardText>
          <a
            href="https://www.youtube.com/watch?v=li_NrhV5Nt8"
            target="_blank"
            rel="noopener noreferrer"
          >
            The following video
          </a>{' '}
          shows this effort in action.
        </CardText>
        <CardVideo>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/li_NrhV5Nt8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </CardVideo>
        <CardSubheading>Territorial Defense Wishlist</CardSubheading>
        <CardText>
          We update this list based on the team's immediate needs.
        </CardText>
        <CardText>
          If you <a href="#donate">can donate</a> any amount, please, please do.
          Anton will immediately get supplies to the people. We{' '}
          <strong>guarantee</strong> validity that the money will be spent on
          Defense of Odessa.
        </CardText>
        <ProductList>
          {PRODUCTS.map((product) => (
            <ProductItem key={product.title}>
              <ProductImage>
                <img src={product.image} alt="" />
              </ProductImage>
              <ProductContent>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductDescription>{product.description}</ProductDescription>
              </ProductContent>
            </ProductItem>
          ))}
        </ProductList>
        <CardSubheading id="donate">How To Donate</CardSubheading>
        <CardText>
          The best way for you to donate is to send money directly to Anton
          Odegov via{' '}
          <a
            href="https://www.westernunion.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Western Union
          </a>{' '}
          with the below instructions. If you prefer to send us money first, use{' '}
          <a
            href="https://www.paypal.com/pools/c/8HXiu6vPzg"
            target="_blank"
            rel="noopener noreferrer"
          >
            PayPal
          </a>{' '}
          or{' '}
          <a
            href="https://www.venmo.com/u/sunnysinghio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Venmo
          </a>
          .
        </CardText>
        <CardSubheading id="#western-union">
          Western Union Instructions
        </CardSubheading>
        <CardText>
          <ol>
            <li>
              Open the{' '}
              <a
                href="https://www.westernunion.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Western Union
              </a>{' '}
              website
            </li>
            <li>
              Click on <strong>Send Money Now</strong>
            </li>
            <li>
              On the next page, fill out:
              <ul>
                <li>
                  <strong>Send To</strong>: <code>Ukraine</code>
                </li>
                <li>
                  <strong>Send Amount</strong>: <code>Any Amount</code>
                </li>
                <li>
                  <strong>How does your receiver want the money</strong>:{' '}
                  <code>Bank Account</code>
                </li>
                <li>
                  <strong>How would you like to pay</strong>:{' '}
                  <code>Debit Card</code> (<em>fastest</em>)
                </li>
              </ul>
            </li>
            <li>
              Click on <strong>Continue</strong>
            </li>
            <li>
              On the next page please provide recipient’s information:
              <ul>
                <li>
                  <strong>Receiver’s First Name</strong>: <code>Anton</code>
                </li>
                <li>
                  <strong>Receiver’s Last Name</strong>: <code>Odegov</code>
                </li>
                <li>
                  <strong>Email address</strong>: <code>Leave Blank</code>
                </li>
                <li>
                  <strong>Phone number</strong>: <code>Leave Blank</code>
                </li>
                <li>
                  <strong>Receiver's bank account information (IBAN)</strong>:
                  <Iban>UA703348510000026206111700902</Iban>
                </li>
                <li>
                  <strong>Purpose of Transaction</strong>:{' '}
                  <code>Charity / Gift</code>
                </li>
                <li>
                  <strong>Source of Funds</strong>: <code>Salary/Income</code>
                </li>
              </ul>
            </li>
            <li>
              Click on <strong>Continue</strong>
            </li>
            <li>
              Make sure that IBAN is correct:
              <Iban>UA703348510000026206111700902</Iban>
            </li>
            <li>
              <strong>Submit</strong> the transfer
            </li>
          </ol>
        </CardText>
        <CardText>Thank you for your help.</CardText>
        <CardAction>
          <Button as="a" href="#links">
            Other Ways To Help
          </Button>
        </CardAction>
      </Card>

      <Card id="links">
        <CardHeading>🔗 Other Ways To Help</CardHeading>
        <CardText>
          Spreading awareness by showcasing Ukraine's flag 🇺🇦 in your social
          media names and avatars is a nice and motivating act, but you can go a
          step further by contacting government representatives, attending
          rallies, and donating money.
        </CardText>
        <CardLinks>
          {LINKS.map((link) => (
            <li key={link.url}>
              <CardLink
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </CardLink>
            </li>
          ))}
        </CardLinks>
        <CardText>
          Also see{' '}
          <a
            href="https://linktr.ee/RazomForUkraine"
            target="_blank"
            rel="noopener noreferrer"
          >
            Razom's curated list
          </a>
          .
        </CardText>
      </Card>
    </Layout>
  );
}
