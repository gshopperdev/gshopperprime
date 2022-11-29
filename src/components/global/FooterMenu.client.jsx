// @ts-expect-error @headlessui/react incompatibility with node16 resolution
import {Disclosure} from '@headlessui/react';
import {Link} from '@shopify/hydrogen';
import '../../styles/footer.css';
import Affordable from '../../assets/footer/affordable.svg';
import Reviews from '../../assets/footer/reviews.svg';
import Secure from '../../assets/footer/secure.svg';
import WideChoice from '../../assets/footer/wide_choice.svg';
import dropDownImg from '~/assets/header/dropDown.png';
import {Heading, IconCaret} from '~/components';

/**
 * A server component that specifies the content of the footer on the website
 */
export function FooterMenu({menu}) {
  const styles = {
    section: 'grid gap-4',
    nav: 'grid gap-2 pb-6',
  };

  return (
    <>
      {(menu?.items || []).map((item) => (
        <section key={item.id} className={styles.section}>
          <Disclosure>
            {/* @ts-expect-error @headlessui/react incompatibility with node16 resolution */}
            {({open}) => (
              <>
                <Disclosure.Button className="text-left md:cursor-default">
                  <Heading className="flex justify-between" size="lead" as="h3">
                    {item.title}
                    {item?.items?.length > 0 && (
                      <span className="md:hidden">
                        <IconCaret direction={open ? 'up' : 'down'} />
                      </span>
                    )}
                  </Heading>
                </Disclosure.Button>
                {item?.items?.length > 0 && (
                  <div
                    className={`${
                      open ? `max-h-48 h-fit` : `max-h-0 md:max-h-fit`
                    } overflow-hidden transition-all duration-300`}
                  >
                    <Disclosure.Panel static>
                      <nav className={styles.nav}>
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.id}
                            to={subItem.to}
                            target={subItem.target}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </nav>
                    </Disclosure.Panel>
                  </div>
                )}
              </>
            )}
          </Disclosure>
        </section>
      ))}{' '}
    </>
  );
}
