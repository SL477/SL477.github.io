interface TerminalPathProps {
  path: string;
}

export default function TerminalPath(props: TerminalPathProps) {
  return (
    <span className='terminalLabel'>
      guest@link477.com<span className='greyText'>:</span>
      <span className='blueText'>{props.path}</span>
      <span className='greyText'>$</span>&nbsp;
    </span>
  );
}
