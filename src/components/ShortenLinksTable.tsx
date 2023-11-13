import React from 'react'

interface tableProps {
    links: string[]
}

const ShortenLinksTable : React.FC<tableProps> = ({links}) => {
    return (
        <div className='text-white'>
          <table>
            <thead>
              <tr>
                <th>Shortened Link</th>
              </tr>
            </thead>
            <tbody>
              {links.map((link, index) => (
                <tr key={index}>
                  <td>{link}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };

export default ShortenLinksTable