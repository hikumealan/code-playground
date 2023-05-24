const badge = `
badge.play = async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const badge = canvas.getByTestId('nexus-badge');
    expect(canvas.getByTestId('nexus-badge')).toBeInTheDocument();
    expect(badge).toHaveTextContent('1');
    badge.setAttribute('variant', 'success');
  };
`;

export default badge;