import {useUrl} from '@shopify/hydrogen';
import {Section, Heading, FooterMenu, CountrySelector} from '~/components';
import '../../styles/footer.css';



/**
 * A server component that specifies the content of the footer on the website
 */
export function Footer({menu}) {
  const {pathname} = useUrl();

  const localeMatch = /^\/([a-z]{2})(\/|$)/i.exec(pathname);
  const countryCode = localeMatch ? localeMatch[1] : null;

  const isHome = pathname === `/${countryCode ? countryCode + '/' : ''}`;
  const itemsCount = menu
    ? menu?.items?.length + 1 > 4
      ? 4
      : menu?.items?.length + 1
    : [];



    const serviceList = [
      {title: 'Wide Choices', content: 'A selection of top brands around the world' },
      {title: 'Affordable', content: 'Home of genuine and affordable products' },
      {title: 'Global Reviews', content: 'A collection of reviews for making informed choices' },
      {title: 'Secure', content: 'Committed to providing peace of mind' },
    ];
    const supportLinkList = [
      { title: 'Help Center', href: '/' },
      { title: 'Common Problem', href: '/' },
      { title: 'Legal Terms', href: '/' },
      { title: 'Privacy Policy', href: '/' },
      { title: 'Return Policy', href: '/' },
    ];
    const aboutLinkList = [
      { title: 'Corporate Information', href: '/' },
      { title: 'Gshopper Official Blog', href: '/' },
      { title: 'Gshopper Together', href: '/' },
      { title: 'Gshopper SupplierConnect', href: '/' },
      { title: 'Affiliate Program', href: '/' },
    ];
    const followLinkList = [
      { icon: 'facebook', href: '/' },
      { icon: 'instagram', href: '/' },
      { icon: 'twitter', href: '/' },
      { icon: 'linkedin', href: '/' },
    ];
    const brandLinkList = [
      { icon: 'keep-online', href: '/' },
    ];
    const paymentList = ['paypal', 'visa', 'jcb', 'american-express', 'mastercard', 'giropay', 'p24', 'ideal', 'linepay', 'kaokaopay', 'sofort', 'mbpay', 'alipay', 'discover', 'diners', 'maestro'];
  
  
  return (
    <Section
    divider={isHome ? 'none' : 'top'}
    as="footer"
    role="contentinfo"
    className="footer-wrap"
    >
      <section className="footer-container">
        <ul className="service-list">
          {
            serviceList.map((item, i) => {
              // const IconTem = item.icon;
              return (
                <li key={i}>
                  <div className="service-icon">
                  {/* <IconTem /> */}
                  </div>
                  <div className="content">
                    <h2>{item.title}</h2>
                    <p>{item.content}</p>
                  </div>
                </li>
              )
            })
          }
        </ul>

        <section className='footer-channel-wrap'>
          <ul className='footer-channel-list'>
            <li
              className={`footer-channel-item`}
              >
              <p className='channel-title'>
                <span>Support</span>
              </p>
              <ul className='faq-link-list'>
                {
                  supportLinkList.map((item, i) => {
                    return (
                      <li className='link-item' key={i}>
                        <a href={item.href} target="_blank" rel="noreferrer">
                          {item.title}
                        </a>
                      </li>
                    )
                  })
                }
              </ul>
            </li>
            <li
              className={`footer-channel-item`}
              >
              <p className='channel-title'>
                <span>About Gshopper</span>
              </p>
              <ul className='faq-link-list'>
                {
                  aboutLinkList.map((item, i) => {
                    return (
                      <li className='link-item' key={i}>
                        <a href={item.href} target="_blank" rel="noreferrer">
                          {item.title}
                        </a>
                      </li>
                    )
                  })
                }
              </ul>
            </li>
            <li className='footer-channel-item'>
              <p className='channel-title'>Follow us</p>
              <ul className='follow-link-list'>
                {
                  followLinkList.map((item, i) => {
                    return (
                      <li className='follow-item' key={i}>
                        <a className={`follow-icon ${item.icon}`} href={item.href} target="_blank" rel="noreferrer"></a>
                      </li>
                    )
                  })
                }
              </ul>
              <p className='channel-title'>
                <span>Gshopper App</span>
              </p>
              <a
                className='download-text'
                target='_blank'
                href={`/`}
                rel="noreferrer">
                <span>Download Gshopper App</span>
              </a>
            </li>
            <li className='footer-channel-item'>
              <p className='channel-title'>Sub-brands</p>
              <ul className='brand-link-list'>
                {
                  brandLinkList.map((item, i) => {
                    return (
                      <li className='brand-item' key={i}>
                        <a className={`brand-icon ${item.icon}`} href={item.href} target="_blank" rel="noreferrer"></a>
                      </li>
                    )
                  })
                }
              </ul>
            </li>
          </ul>
        </section>
        <section className="footer-payment">
          <ul className="payment-list">
            {
              paymentList.map((item, i) => {
                return (
                  <li className='payment-item' key={i}>
                   <i className={`icon-payment ${item}`}></i>
                  </li>
                )
              })
            }
          </ul>
        </section>
    
      </section>
      <section className='copy-right'>
        Copyright ® 2022 Gshopper All Rights Reserved
      </section>
    </Section>

    
    // <Section
    //   divider={isHome ? 'none' : 'top'}
    //   as="footer"
    //   role="contentinfo"
    //   className={`grid min-h-[25rem] items-start grid-flow-row w-full gap-6 py-8 px-6 md:px-8 lg:px-12 
    //     border-b md:gap-8 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-${itemsCount}
    //     bg-primary dark:bg-contrast dark:text-primary text-contrast overflow-hidden`}
    // >
    //   <FooterMenu menu={menu} />
    //   <section className="grid gap-4 w-full md:max-w-[335px] md:ml-auto">
    //     <Heading size="lead" className="cursor-default" as="h3">
    //       Country
    //     </Heading>
    //     <CountrySelector />
    //   </section>
    //   <div
    //     className={`self-end pt-8 opacity-50 md:col-span-2 lg:col-span-${itemsCount}`}
    //   >
    //     &copy; {new Date().getFullYear()} / Shopify, Inc. Hydrogen is an MIT
    //     Licensed Open Source project. This website is carbon&nbsp;neutral.
    //   </div>
    // </Section>

    
  );
}
